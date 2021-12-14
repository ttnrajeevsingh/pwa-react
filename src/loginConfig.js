let loginConfig = {
  "publicKey": {
    "challenge": "2AA7iXFAJJRJMJMcRc3bl9R5u68hLQexVkKt9q3wqyA=",
    "timeout": 60000,
    "rpId": "main--objective-shannon-3368bd.netlify.app",
    "allowCredentials": [
      {
        "type": "public-key",
        "id": "AQsI7DSj/xjEcLlADoxh0YLrvcvkCHnRkGqXK/rW21RahFF5HfD4XOzmHGEVCi7JY1OEK1rITAcf2KnHdf30wBk=",
        transports: ["nfc", "usb", "ble", "nfc", "usb", "ble", "internal"]
      }
    ],
    "extensions": {
      "txAuthSimple": ""
    },
    "userVerification": "discouraged",
    "pubKeyCredParams": [
      {
        "type": "public-key",
        "alg": -7
      },
      {
        "type": "public-key",
        "alg": -35
      },
      {
        "type": "public-key",
        "alg": -36
      },
      {
        "type": "public-key",
        "alg": -257
      },
      {
        "type": "public-key",
        "alg": -258
      },
      {
        "type": "public-key",
        "alg": -259
      },
      {
        "type": "public-key",
        "alg": -37
      },
      {
        "type": "public-key",
        "alg": -38
      },
      {
        "type": "public-key",
        "alg": -39
      },
      {
        "type": "public-key",
        "alg": -8
      }
    ],
    "authenticatorSelection": {
      "requireResidentKey": false,
      "userVerification": "discouraged"
    },   
    "attestation": "none"
  }
}
export {loginConfig};