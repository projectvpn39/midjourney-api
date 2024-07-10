import requests


def sendemail(user, sender_email, receiver_email, subject_line, content, action):
    # Send the first request to trigger the imagine endpoint
    request_url = 'https://prod-62.southeastasia.logic.azure.com:443/workflows/e6951c64d93b4b01ad5dae3ce3eb109c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qpSus9C5KInLfnfzQ5Vi2JL_ROt3h7eIJxTi3BDfpkA'

    # To be edited
    email_info = {
        "user": user,
        # this one need to match the account set in automate, maybe investigate it later
        "sender_email": sender_email,
        "receiver_email": receiver_email,  # need to be HTML format content
        "subject_line": subject_line,
        "content": content,
        "action": action,
    }
    print(email_info)
    response = requests.post(request_url, json=email_info)

    return response


# testing by calling a funtion
s = sendemail(user="Kenny",
              sender_email="02009621@corphq.hk.pccw.com",
              receiver_email="02009621@corphq.hk.pccw.com",
              subject_line="Test email function in power automate",
              content="<p> Hello world </p> <p>This is just for testing</p>",
              action="sendemail",
              )
print(s)
