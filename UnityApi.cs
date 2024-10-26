using System.Collections;
using UnityEngine;
using UnityEngine.Networking;

public class DebugDataSender : MonoBehaviour
{
    private string apiUrl = "http://localhost:3000/api/debug"; // Update URL based on your API endpoint

    [System.Serializable]
    public class DebugData
    {
        public string message;
        public int errorCode;
    }

    public void SendDebugData(string message, int errorCode)
    {
        // Create a new DebugData object and populate it with data
        DebugData debugData = new DebugData
        {
            message = message,
            errorCode = errorCode
        };

        // Convert the DebugData object to JSON
        string jsonData = JsonUtility.ToJson(debugData);

        // Start the coroutine to send data
        StartCoroutine(PostDebugData(jsonData));
    }

    private IEnumerator PostDebugData(string jsonData)
    {
        // Create a new UnityWebRequest for sending JSON data
        using (UnityWebRequest request = new UnityWebRequest(apiUrl, "POST"))
        {
            byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(jsonData);
            request.uploadHandler = new UploadHandlerRaw(jsonToSend);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");

            // Wait for the request to send and receive a response
            yield return request.SendWebRequest();

            // Check for errors
            if (request.result == UnityWebRequest.Result.Success)
            {
                Debug.Log("Debug data sent successfully: " + request.downloadHandler.text);
            }
            else
            {
                Debug.LogError("Error sending debug data: " + request.error);
            }
        }
    }

    // Example of triggering the SendDebugData method
    private void Start()
    {
        // Send sample debug data
        SendDebugData("Sample debug message from Unity", 200);
    }
}
