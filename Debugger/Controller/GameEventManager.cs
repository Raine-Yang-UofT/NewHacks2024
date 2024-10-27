using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.TextCore.Text;

public class GameEventManager : MonoBehaviour {

    private static GameEventManager _instance;

    public static GameEventManager Instance { get { return _instance; } }

    public List<IEventObserver> observers = new List<IEventObserver>();
    
    // record last event received
    private string lastEventSource;
    private int lastEventTimeStamp;

    // singleton constructor
    private void Awake() {
        if (_instance != null && _instance != this) {
            Destroy(this.gameObject);
        } else {
            _instance = this;
        }
    }

    public void RegisterObserver(IEventObserver observer) {
        observers.Add(observer);
    }

    public void AddGameEvent(GameEventBase gameEvent) {
        gameEvent.ExecuteEvent();

        // filter out same event from same source within 1 second
        if (lastEventSource != null 
                && lastEventTimeStamp != 0
                && String.Equals(lastEventSource, gameEvent.Source.name)
                && lastEventTimeStamp == gameEvent.TimeStamp) {
            lastEventSource = gameEvent.Source.name;
            lastEventTimeStamp = gameEvent.TimeStamp;
            return;
        }

        lastEventSource = gameEvent.Source.name;
        lastEventTimeStamp = gameEvent.TimeStamp;

        foreach (IEventObserver observer in observers) {
            observer.OnEventUpdate(gameEvent);
        }
    }
}