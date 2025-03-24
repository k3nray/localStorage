const contactForm = document.getElementById("contactForm");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");
const inputUrlImagen = document.getElementById("imagen");

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const addContact = (name, email, mensaje, UrlImagen) => {
  contacts.push({
    name,
    email,
    mensaje,
    UrlImagen,
  });
  localStorage.setItem("contacts", JSON.stringify(contacts));
  return { name, email, mensaje, UrlImagen };
};

const createContactElement = ({ name, email, mensaje, UrlImagen }) => {
  contacts.push({
    name,
    email,
    mensaje,
    UrlImagen,
  });
  return { name, email, mensaje, UrlImagen };
};

contactForm.onsubmit = (e) => {
  e.preventDefault();

  const newContact = addContact(
    inputName.value,
    inputEmail.value,
    inputMensaje.value,
    inputUrlImagen.value
  );
  createContactElement(newContact);
  contactForm.reset();
};

const showContacts=()=> { 
  let getItem=  JSON.parse(localStorage.getItem("contacts")) || []
  const archivados= document.getElementById('contacts')
getItem.forEach(element => {

  let nombre= element.name
  let email=element.email
  let mensaje= element.mensaje
  let UrlImagen= element.UrlImagen 

  let  crear =` <div> nombre: ${nombre} <br>
  Email: ${email} <br> 
  Mensaje:${mensaje} <br>
  Url imagen: ${UrlImagen}<br></div>`
  archivados.innerHTML += crear

});
}

document.getElementById('showContacts').addEventListener('click',showContacts)
document.getElementById('deleteContacts').addEventListener('click',() => {
  localStorage.removeItem('contacts')
  document.getElementById('contacts').innerHTML;
})