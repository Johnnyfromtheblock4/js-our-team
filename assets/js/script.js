const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//definisco la funzione che mi genera la struttura delle card
const generateCard = ({ name, role, email, img }) => {
  //creo la variabile che contenga le info e l'html della card
  const memberCard = 
  `<div class="card mb-3 border-0 mb-5" style="max-width: 440px;">
    <div class="row g-0 bg-black">
      <div class="col-12 col-md-4">
        <img src="./assets/${img}" alt="" class="img-fluid rounded-start"/>
      </div>
      <div class="col-12 col-md-8">
        <div class="card-body">
          <h5 class="card-title text-white">${name}</h5>
          <p class="card-text text-white">${role}</p>
          <p class="card-text text-info">${email}</p>
        </div>
      </div>
    </div>
  </div>`;

  return memberCard;
};

//definisco una funzione per inserire le card in pagina
const renderCard = () => {
  for (let i = 0; i < teamMembers.length; i++) {
    let card = generateCard(teamMembers[i]);

    teamContainer.innerHTML += card;
  }
};

//recupero gli elementi del dom che mi servono
const teamContainer = document.getElementById("team-members");
const addMember = document.getElementById("add-member");

//creo funzione per inserire nuova card al click
addMember.addEventListener("click", function (event) {
  //prevengo refresh pagina
  event.preventDefault();

  //svuoto il container
  teamContainer.innerHTML = "";

  //recupero i valori inseriti nel form
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let email = document.getElementById("email").value;
  let image = document.getElementById("image").value;

  //creo nuovo oggetto contenente i valori del form
  let newMember = {
    name,
    role,
    email,
    img: image,
  };

  teamMembers.push(newMember);

  renderCard();
});

renderCard();
