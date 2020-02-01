#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import signal
from libs        import callback
from transitions import Machine
from libs.state import auth
from libs.state import purchase
from libs.state import crearing

class StateMachine(object):
    #状態の定義
    states = ['auth', 'purchase', 'clearing', 'end']

    #初期化（ステートマシンの定義：とりうる状態の定義、初期状態の定義、各種遷移と紐付くアクションの定義）
    def __init__(self, name, stub):
        self.name = name
        self.stub = stub
        self.rfids = list()
        self.machine = Machine(model=self, states=StateMachine.states, initial='auth', auto_transitions=True)
        self.machine.add_transition(trigger='init_auth', source='auth',   dest='purchase', before='Auth', after='fin_auth')
        self.machine.add_transition(trigger='init_purchase', source='purchase', dest='clearing', before='Purchase', after='fin_purchase')
        self.machine.add_transition(trigger='init_clearing', source='clearing', dest='end', before='Clearing', after='fin_clearing')

    #以下、遷移時のアクション

    def Auth(self):
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

    def Purchase(self):
        print("state:purchase")
        state = purchase.MainStatePurchase()
        call = callback.CallBack(self.inputkill)
        state.Purchase()

        self.rfids = state.GetList()
    
    def inputkill(self):
        os.kill(int(os.getpid()), signal.SIGINT)

    def fin_purchase(self):
        self.trigger('init_clearing')

    def Clearing(self):
        print("state:clearing")
        state = crearing.MainStateClearing(self.stub)
        state.Clearing(self.user, self.rfids)

    def fin_clearing(self):
        print("*** All Finish ***")

    