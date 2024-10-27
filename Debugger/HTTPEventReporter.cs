using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class HTTPEventReporter : MonoBehaviour, IEventReporter
{
    private string apiUrl = "http://localhost:3000/api/debug"; // Update URL based on your API endpoint

    public void OnEventUpdate(GameEventBase gameEvent) {
        HTTPEventSender.Instance.SendEvent(gameEvent, apiUrl);
    }

    public void DisplayReportEnd() {

    }
    
}
