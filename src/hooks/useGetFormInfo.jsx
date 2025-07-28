import { uploadImage } from "../fetchData";

    // Guarda en la base de datos la imagen
    const saveImage = (file, token) => {
        const formData = new FormData();
        formData.append('image', file);

        return uploadImage(formData, token)
        .then(res => {
            return res
        })
        .catch(()=> {return null})
    }

// Guarda la descripcion en la base de datos
export const getFormData = async (event, token, metodo = null)=> { // el metodo sirve para diferenciar entre el form para editar y para crear la publicacion
        event.preventDefault()
        const formData = new FormData(event.target)

        const file = formData.get('file')
        const name = formData.get('name')
        const price = formData.get('price')
        const category = formData.get('category')

        event.target.reset() // reseto el form

        let fileName = undefined

        // evalua que el metodo no sea null, ya que por defecto lo es
        if (!metodo) {
            fileName = await saveImage(file, token)

            if (!fileName) return console.error("no se guardo la imagen")
        }

        const newProduct = {img: fileName, name, price, category}

        return newProduct
    }