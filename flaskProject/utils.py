#!/usr/bin/env python3
import random
import string


def random_string_generator():
    return ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(6))


def random_number_generator():
    return ''.join(random.choice(string.digits) for _ in range(10))
