using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IEventReporter : IEventObserver {
    public void DisplayReport();
}