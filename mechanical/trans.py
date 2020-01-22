#!/usr/bin/python
# -*- coding: utf-8 -*-

from transitions import Machine

class StateMachine(object):
    #状態の定義
    states = ['solid', 'liquid', 'gas', 'plasma']

    #初期化（ステートマシンの定義：とりうる状態の定義、初期状態の定義、各種遷移と紐付くアクションの定義）
    def __init__(self, name):
        self.name = name
        self.machine = Machine(model=self, states=StateMachine.states, initial='liquid', auto_transitions=False)
        self.machine.add_transition(trigger='melt',      source='solid',  dest='liquid')
        self.machine.add_transition(trigger='evaporate', source='liquid', dest='gas',    before='action_l2g')
        self.machine.add_transition(trigger='sublimate', source='solid',  dest='gas')
        self.machine.add_transition(trigger='ionize',    source='gas',    dest='plasma', after='action_g2p')

    #以下、遷移時のアクション
    def action_l2g(self):
        print("*** from liquid to gas ***")

    def action_g2p(self):
        print("*** from gas to plasma ***")
