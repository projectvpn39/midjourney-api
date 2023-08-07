from os import getenv

import aiohttp
from loguru import logger

from lib.api import CALLBACK_URL
from util.fetch import fetch

import os

async def callback(data,my_callback):
    logger.debug(f"callback data: {data}")
    if not CALLBACK_URL:
        return

    # get the file extension of the URL
    content_type = data['attachments'][0]['content_type']
    
    # only call the callback function if the file extension is .png
    if content_type == 'image/png':
        # url = data['attachments'][0]['url']
        my_callback(data)

    headers = {"Content-Type": "application/json"}
    async with aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            headers=headers
    ) as session:
        await fetch(session, CALLBACK_URL, json=data)



QUEUE_RELEASE_API = getenv("QUEUE_RELEASE_API") \
                    or "http://127.0.0.1:8062/v1/api/trigger/queue/release"


async def queue_release(trigger_id: str):
    logger.debug(f"queue_release: {trigger_id}")

    headers = {"Content-Type": "application/json"}
    data = {"trigger_id": trigger_id}
    async with aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            headers=headers
    ) as session:
        await fetch(session, QUEUE_RELEASE_API, json=data)






