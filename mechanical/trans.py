#!/usr/bin/python
# -*- coding: utf-8 -*-

from transitions import Machine
from libs.state import auth
from libs.state import purchase
from libs.state import crearing
import threading
import Queue

class StateMachine(object):
    #状態の定義
    states = ['auth', 'purchase', 'clearing']

    #初期化（ステートマシンの定義：とりうる状態の定義、初期状態の定義、各種遷移と紐付くアクションの定義）
    def __init__(self, name, stub):
        self.name = name
        self.stub = stub
        self.queue = Queue.Queue()
        self.rfids = list()
        self.machine = Machine(model=self, states=StateMachine.states, initial='auth', auto_transitions=True)
        self.machine.add_transition(trigger='init_auth', source='auth',   dest='purchase', before='auth', after='fin_auth')
        self.machine.add_transition(trigger='init_purchase', source='purchase', dest='clearing', before='purchase', after='fin_purchase')
        self.machine.add_transition(trigger='init_clearing', source='clearing',  dest='auth', before='clearing', after='fin_clearing')

    #以下、遷移時のアクション

    def auth(self):
        print("state:authentication")
        state = auth.MainStateAuth(self.stub)
        status = False
        while not status:
            try:
                usr, status = state.Auth(raw_input('>>'))
            except:
                print("filed auth")
        self.user = usr
        print(usr.name)

    def fin_auth(self):
        self.trigger('init_purchase')

    def purchase(self):
        print("state:purchase")
        state = purchase.MainStatePurchase()
        t1 = threading.Thread(target=state.Purchase, args=(self.queue,))
        t2 = threading.Thread(target=state.Fin, args=(self.queue,))
        t1.start()
        t2.start()
        t1.join()
        self.rfids = state.GetList()

    def fin_purchase(self):
        self.trigger('init_clearing')

    def clearing(self):
        print("state:clearing")
        state = crearing.MainStateClearing(self.stub)
        state.Clearing(self.user, self.rfids)

    def fin_clearing(self):
        print("*** All Finish ***")