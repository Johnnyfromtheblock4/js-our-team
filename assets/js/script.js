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
const generateCard = (member) => {
  //destrutturo l'oggetto
  const { name, role, email, img } = member;

  //creo la variabile che contenga le info e l'html della card
  const memberCard = `<div class="col-12 col-md-4">
          <div class="card" id="card">
            <img src="assets/img/female1.png" alt="" />
          </div>
          <div class="card-body">
            <h4 class="text-center">Marco Bianchi</h4>
            <p class="text-center">Designer</p>
          </div>
        </div>`;

  return memberCard;
};

//recupero gli elementi del dom che mi servono
const teamContainer = document.getElementById("team-members");
