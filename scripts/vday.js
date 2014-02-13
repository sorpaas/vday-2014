S.VDAY = (function () {
  var currentState = null;
  var currentStepIndex = 0;
  var allSteps = [
    {
      init: function () {
        return "Hi,|Bobolone!||My name is|pa'acif,|The naughty|spirit|created by|Brendan.||Say hello|to me!||Just type|\"Hello\"|";
      }, 
    
      vali: function (message) {
        if (message.toLowerCase() === "hello") {
          return true;
        } else {
          return false;
        }
      }, 
    
      erro: function () {
        return "What?|Just type|\"Hello\"|";
      }
    },
    
    {
      init: function () {
        return "你好||pa'acif|need help!||Careless|Brendan|accidentally|put me|in this|slow|text|communicator.||pa'acif|want|a console|to talk|with you.||Brendan|said|he was|preparing|gifts|in memory of|a person|who did|something|great|in Ancient|Rome|in 14th Feb|in the early|4th century.||The console|he is|using|may contain|the name|of that|person.||Maybe|we can|use that|as the|keyword|to search|for|the console.||Can you|give me|the name|of that|person?|";
      }, 
    
      vali: function (message) {
        if (message.toLowerCase() === "valentine") {
          return true;
        } else {
          return false;
        }
      }, 
    
      erro: function () {
        return "Let me|search...||#countdown 10||No,no|I didn't|find|anything.||Please|try|again.||He was|a brave|person|in Ancient|Rome|in 14th Feb|in the early|4th century.|";
      }
    },
    
    {
      init: function () {
        S.UI.simulate("Let me|search...||#countdown 10||Wow!|You are|right!||Let me|run the|command...||#countdown 3");
        window.location.href = "console-valentine";
      }, 
    
      vali: function (message) {
        if (message === "") {
          return true;
        } else {
          return false;
        }
      }, 
    
      erro: function () {
        return "";
      }
    },
  ];
  
  function onSimulationFinished() {
    switch (currentState) {
    case "inited":
      S.UI.showInput();
      break;
    }
  }
  
  function onMessageRecieved(message) {
    switch (currentState) {
    case "inited":
      S.UI.hideInput();
      if (allSteps[currentStepIndex].vali(message)) {
        currentState = "succed";
        if (currentStepIndex < (allSteps.length - 1)) {
          currentStepIndex = currentStepIndex + 1;
          S.UI.hideInput();
          S.UI.simulate(allSteps[currentStepIndex].init());
          currentState = "inited";
        }
      } else {
        S.UI.simulate(allSteps[currentStepIndex].erro());
      }
      break;
    }
  }

  return {
    init: function () {
      S.UI.hideInput();
      S.UI.simulate(allSteps[currentStepIndex].init());
      currentState = "inited";
    },
    
    onSimulationFinished: onSimulationFinished,
    onMessageRecieved: onMessageRecieved
  };
}());

