#!/usr/bin/python
# -*- coding: utf-8 -*-

import trans
import time
from libs.state import auth
from libs       import connect

def run():
    con  = connect.GrpcServer('192.168.0.12:49201')
    stub = con.GetServeCon()
    while True:
        trs = trans.StateMachine('trs', stub)
        print(trs.state)
        trs.trigger('init_auth')

if __name__ == '__main__':
    run()

# con  = connect.GrpcServer('localhost:49201')
# stub = con.GetServeCon()
# at = auth.MainStateAuth(stub)
# while True:
#     code  = raw_input('>>')
#     user, status = at.Auth(code)
#     if status:
#         print(user)
#     else:
#         print('filed')