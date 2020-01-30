#!/usr/bin/python
# -*- coding: utf-8 -*-

import yaml

# 定数
PATH = './libs/config/config.yaml'

def GetStore():
    store = GetDicByKey('store')
    return store

def GetDicByKey(key):
    with open(PATH) as file:
        yml = yaml.load(file, Loader=yaml.SafeLoader)
        return yml[key]