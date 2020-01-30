#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import time
import Queue
import timeout_decorator
from select import select

class MainStatePurchase(object):

    def __init__(self):
        self.rfids = list()

    def Purchase(self, queue):
        while queue.empty():
            print (">>")
            has, _, _ = select([sys.stdin], [], [], 2)
            if has:
                id = sys.stdin.readline().replace('\n','')
                print id
                if id in self.rfids:
                    self.rfids.remove(id)
                else:
                    self.rfids.append(id)
            else:
                print ('No input')
        print('input fin')

    @timeout_decorator.timeout(1000)
    def inputOnTime(self):
        return raw_input('>>')

    def Fin(self, queue):
        time.sleep(10)
        print("stop")
        queue.put(False)

    def GetList(self):
        return self.rfids