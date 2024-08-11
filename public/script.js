// ID unik
// Address Book is the name of the app
// Contacts is the name of the data
// Employees is the name of the data

// Facebook is the app. Friends is the data
// Instagram is the app. Followers, Followings is the data

const dataContacts = [
  {
    id: 1,
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
    birthday: "14-03-2006",
    avatarURL: "/assets/ryan.jpeg",
    // avatarURL: "https://api.dicebear.com/9.x/thumbs/svg?seed=Ryan",
    address: "",
  },

  {
    id: 4,
    fullName: "Dilan",
    email: "putradilan@gmail.com",
    phoneNumber: "+6285860987806",
    label: "work",
    birthday: "15-09-2001",
    avatarURL: "",
    address: "",
  },

  {
    id: 5,
    fullName: "roma",
    email: "ademaputra@gmail.com",
    phoneNumber: "+6285860987806",
    label: "work",
    birthday: "15-09-2001",
    avatarURL: "",
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
//call the funcation add data
addContact(dataContacts, {
  id: 6,
  fullName: "Ryan Ademaputra",
  email: "ademaputraryan@gmail.com",
  phoneNumber: "+6285860987806",
  label: "friend",
  birthday: "2001-02-20",
  avatarURL: "/assets/ryan.jpeg",
  address: "",
});

// funcation edit data
function editContact(id, updatedInfo) {
  const contactIndex = dataContacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) {
    console.error("Contact not found");
    return;
  }
  dataContacts[contactIndex] = {
    ...dataContacts[contactIndex],
    ...updatedInfo,
  };
  console.log("Contact updated:", dataContacts[contactIndex]);
}
// Call the function edit data
editContact(2, { fullName: "Obbyphy rererereerere", email: "Obby@gmail.com" });

// funcation delete data
function deleteContact(id) {
  const contactIndex = dataContacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) {
    console.log("contact not found");
    return;
  }
  dataContacts.splice(contactIndex, 1);
  console.log("Contact deleted. Remaining contacts:", dataContacts);
}
// Call the function delete data
deleteContact(1);

// display data contact
displayContacts(dataContacts);
