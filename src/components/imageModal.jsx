import '../styles/imageModal.css'

export function ImageModal ({name, img, closeModal}) {
    return (
        <div className="contenedor-imagen-modal">
            <div className="imagen-modal">
                <div className="close-modal" onClick={()=> closeModal(null)}>X</div>
                <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${img}`} alt={name} />
            </div>
        </div>
    )
}