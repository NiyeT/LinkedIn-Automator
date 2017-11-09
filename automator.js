const my_key_terms=["San","Francisco","San Jose","Silicon Valley","Engineer","Software","Diego","Los Angeles","Programmer",
"Developer","ui","ux","Google","Apple","Facebook","Amazon","Microsoft","Twitter",
]

//Decisional network connection automation
const linkedInAutomator={
  decision:{
    //Retrieves a users card information.
    approach:function(html){
      let attributes=String(html.innerHTML);
      //console.log('attributes:',attributes);
      return attributes;
    },
    //Checks a users card for any of your key terms.
    checkRelevancy:function(personsAttributes,myAttributes){
      personsAttributes=personsAttributes.toLowerCase();
      let attributesLength=myAttributes.length;
      for(let i=0;i<attributesLength;i++){
        let attribute=myAttributes[i].toLowerCase();
        const re=new RegExp(attribute,'g');
        const hasAttribute=re.exec(personsAttributes);
        if(hasAttribute){return true};
        //console.log('regex:',re);
        //console.log('attributes:',personsAttributes);
      }
    }
  },
  linkedIn:{
    //Simulates a javascript click event.
    simulateClick:function(element){
      const click = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      element.dispatchEvent(click);
    },
    //Send an invitation to the upcoming user.
    connect:function(person){
      let button=document.querySelector('.button-secondary-small');
      this.simulateClick(button);
      console.log(
        'Invitation sent to ' + person.querySelector('.mn-person-info__name').innerText
      )
    },
    //Deletes the upcoming users card.
    disconnect:function(person){
      person.remove();
    }
  },
  automate:{
    //Distance to be scrolled per second based upon expected card processing rate.
    scrollDist:(window.innerHeight*.60532688),
    //Checks users card for any of the key terms listed in myAtttributes, if a key term is found, a connection invitation is sent, otherwise, the users card is removed.
    evaluateUser:function(_this,myAttributes){
      const person=document.querySelector('.mn-pymk-list__card');
      //console.log('person:',person);
      const personsAttributes=_this.decision.approach(person);
      const isRelevantConnection=_this.decision.checkRelevancy(personsAttributes,myAttributes);
      if(isRelevantConnection){
        _this.linkedIn.connect(person);
      }else{
        _this.linkedIn.disconnect(person);
      }
    },
    //Scrolls periodically in order to load additional connections.
    autoScroll:function(){
      let allCards=document.querySelectorAll('.mn-pymk-list__card');
      if(allCards.length>=120){
        let remove=allCards.length/3;
        for(let i=0;i<remove;i++){
          document.querySelectorAll('.mn-pymk-list__card')[i].remove();
        }
      }else{
        $(window).scrollTop($(window).scrollTop() + this.scrollDist);        
      }
    },
    //Evaluates the next user in line once per second.
    automate:function(_this,myAttributes){
      const once=()=>{
        _this.automate.autoScroll();
        _this.automate.evaluateUser(_this,myAttributes);
      }
      automator=setInterval(once,1000);
    }
  },
  //Calls automate.automate in order to pass its containing object while maintaining organization.
  start:function(attributes){
    this.automate.automate(this,attributes);
  },
  stop:function(){
    clearInterval(automator);
  }
}

linkedInAutomator.start(my_key_terms);
