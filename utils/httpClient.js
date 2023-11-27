const API = "http://localhost:8000/api/"

export function get(path) {
  return fetch(API + path)
    .then(result => result.json())
}

export function post(path) {
  return (API + path)
}


export function getUsers(path,) {
  return fetch(API + path, {
    headers: {
      authenticate: localStorage.getItem("token")
    },
  }).then(result => result.json())
    ;
}


export function getRecipes(path) {
  return fetch(API + path)
    .then(result => result.json())
    ;
};

export function getFavorites(path) {
  return fetch(API + path)
    .then(result => result.json())
    ;
};

const DeleteButton = ({ route }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(API + route, {
        method: 'DELETE',
        headers: {
          authenticate: localStorage.getItem("token")
        },
      });

      if (response.ok) {
        console.log('Usuario eliminado correctamente');
        window.location.href = '/userList';
      } else {
        console.error('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className=" fond btn btn-light text-light" onClick={handleDelete}>Eliminar</button>
  );
};

export default DeleteButton;

