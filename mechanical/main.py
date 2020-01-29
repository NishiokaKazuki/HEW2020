#!/usr/bin/python
# -*- coding: utf-8 -*-

import trans
import time
from libs.state import auth
from libs       import connect

def run():
    con  = connect.GrpcServer('localhost:49201')
    stub = con.GetServeCon()
    at = auth.MainStateAuth(stub)
    while True:
        id  = raw_input('>>')
        token, status = at.Auth(id)
        if status:
            print(token)
        else:
            print('filed')

if __name__ == '__main__':
    run()