using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class HTTPEventSender : MonoBehaviour {

    private static HTTPEventSender _instance;

    public static HTTPEventSender Instance { get { return _instance; } }

    // singleton constructor
    private void Awake() {
        if (_instance != null && _instance != this) {
            Destroy(this.gameObject);
        } else {
            _instance = this;
        }
    }

    public void SendEvent(GameEventBase gameEvent, string api) {
        // parse data to json
        GameEventSerializable eventSerializable = new GameEventSerializable(gameEvent);
        string jsonData = JsonConvert.SerializeObject(eventSerializable);
        Debug.Log("Sending event data: " + jsonData);
        StartCoroutine(PostEventData(jsonData, api));
    }

    private IEnumerator PostEventData(string jsonData, string api) {
        // Create a new UnityWebRequest for sending JSON data
        using (UnityWebRequest request = new UnityWebRequest(api, "POST")) {
            byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(jsonData);
            request.uploadHandler = new UploadHandlerRaw(jsonToSend);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");

            // Wait for the request to send and receive a response
            yield return request.SendWebRequest();

            // Check for errors
            if (request.result == UnityWebRequest.Result.Success) {
                Debug.Log("Debug data sent successfully: " + request.downloadHandler.text);
            } else {
                Debug.LogError("Error sending debug data: " + request.error);
            }
        }
    }
}
