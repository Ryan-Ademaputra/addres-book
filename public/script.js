const dataContacts = [
  {
    id: 1, // ID unik
    fullName: "Ryan Ademaputra",
    email: "ademaputraryan@gmail.com",
    phoneNumber: "+6285860987806",
    label: "friend",
    birthday: "2006-03-14",
    avatarURL: "/assets/ryan.jpeg",
    address: "",
  },
  {
    id: 2,
    fullName: "Ademaputra",
    email: "ryan@gmail.com",
    phoneNumber: "+6285860987806",
    label: "work",
    birthday: "2005-03-15",
    avatarURL: "/assets/ryan.jpeg",
    address: "",
  },
  {
    id: 3,
    fullName: "Ryan Ademaputra",
    email: "ademaputraryan@gmail.com",
    phoneNumber: "+6285860987806",
    label: "friend",
    birthday: "2001-02-20",
    avatarURL: "/assets/ryan.jpeg",
    address: "",
  },
];

function addContact(dataContacts, newContact) {
  dataContacts.push(newContact);

  console.log(dataContacts);
}

//function format data contact
function formatDataContacts(dataContact) {
  return `${dataContact.id} ${dataContact.fullName} ${dataContact.email} ${dataContact.phoneNumber} ${dataContact.label} ${dataContact.birthday} ${dataContact.avatarURL} ${dataContact.address}`;
}

//function display data contact console
function displayContacts(dataContacts) {
  dataContacts.forEach((dataContact) => {
    console.log(formatDataContacts(dataContact));
  });
}
addContact(dataContacts, {
  id: 3,
  fullName: "Ryan Ademaputra",
  email: "ademaputraryan@gmail.com",
  phoneNumber: "+6285860987806",
  label: "friend",
  birthday: "2001-02-20",
  avatarURL: "/assets/ryan.jpeg",
  address: "",
});

// display data contact
displayContacts(dataContacts);

localStorage.setItem("data", [
  {
    nama: "Ryan Ademaputra",
    umur: "18",
  },
]);
