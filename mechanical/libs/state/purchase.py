#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import time
from select import select

class MainStatePurchase(object):

    def __init__(self):
        self.rfids = list()

    def Purchase(self):
        while True:
            try:
                id = raw_input('>>')
            except:
                break
            else:
                if id in self.rfids:
                    self.rfids.remove(id)
                else:
                    self.rfids.append(id)
        print('input fin')

    def GetList(self):
        return self.rfids