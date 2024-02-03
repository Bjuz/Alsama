const form = document.getElementById("form");
const { GetACostumer } = require("./util");
const { UpdateCX } = require("./util");
const concierge = document.getElementById("concierge"),
agent = document.getElementById("agent"),
costumerName = document.getElementById("costumerName"),
costumerEmail = document.getElementById("costumerEmail"),
children = document.getElementById("childrens"),
adult = document.getElementById("adults"),
iva = document.getElementById("iva");


document.getElementById("CXSearch").onclick = async function () {
    event.preventDefault();
    const email = document.getElementById("cxemail").value

      const response = await GetACostumer(email);
     if (response != "No documents found based on email." && response != 'Error getting documents') {
        concierge.value = response[0].concierge;
        agent.value = response[0].agent;
        costumerName.value = response[0].costumerName;
        costumerEmail.value = response[0].email;
        children.value = response[0].children;
        adult.value = response[0].adult;
        iva.value = response[0].iva;
     }else{
      alert(response);
   }
   
}

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const Costumer = {
        concierge: concierge.value,
        agent: agent.value,
        costumerName: costumerName.value,
        email: costumerEmail.value,
        children: children.value,
        adult: adult.value,
        iva: iva.value
      };

      const response = await UpdateCX(Costumer);
      alert(response);
      return response;
   
})
/*

 concierge:Costumer.concierge,
          agent:Costumer.agent,
          costumerName:Costumer.costumerName,
          email:Costumer.email,
          children:Costumer.children,
          adult:Costumer.children,
          iva:Costumer.iva,
*/