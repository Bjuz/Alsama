const form = document.getElementById("form")
const { CreateACostumer } = require("./util");
const concierge = document.getElementById("concierge"),
agent = document.getElementById("agent"),
costumerName = document.getElementById("costumerName"),
costumerEmail = document.getElementById("costumerEmail"),
children = document.getElementById("childrens"),
adult = document.getElementById("adults"),
iva = document.getElementById("iva");


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

      const response = await CreateACostumer(Costumer);
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