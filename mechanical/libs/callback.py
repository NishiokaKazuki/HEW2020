#!/usr/bin/python
# -*- coding: utf-8 -*-

import RPi.GPIO as GPIO

class CallBack(object):
    def __init__(self, func):
        print('add callbuck')
        self.func = func
        pin = 4
        GPIO.cleanup()
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pin, GPIO.IN) 

        # 割り込みイベント設定
        GPIO.add_event_detect(pin, GPIO.FALLING, callback = self.call_back, bouncetime=300)
        # コールバック関数登録
    
    def call_back(self, channel):
        print('call')
        self.func()
        GPIO.cleanup()

        