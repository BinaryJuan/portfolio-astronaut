import './Project.css'

const Project = ({ pname, techs, pdescription, pid, ppid, status, img, link, arrow }) => {
    const display = (e) => {
        const checked = e.target.checked
        const description = document.getElementById(ppid)
        const arrowID = document.getElementById(arrow)
        if (checked) {
            description.style.maxHeight = '500px'
            description.style.transition = 'max-height 0.75s ease-in, padding 0.2s ease-in, opacity 0.25s'
            description.style.padding = '20px'
            description.style.opacity = '1'
            arrowID.style.rotate = '90deg'
        }
        else {
            description.style.maxHeight = '0px'
            description.style.transition = 'max-height 0.35s ease-out, padding 0.45s ease-out, opacity 0.55s'
            description.style.overflow = 'hidden'
            description.style.padding = '0px'
            description.style.opacity = '0'
            arrowID.style.rotate = '0deg'
        }
    }

    const statusColor = {
        color: status.color
    }

    return (
        <div className='projectContainer'>
            <input type='checkbox' id={pid} className='projectCheckbox' onClick={display} />
            <label htmlFor={pid}>
                <div className='projectListElement'>
                    <img className='arrowRight' id={arrow} src='media/arrow-right.svg' alt='arrow-right' />
                    <h3>/{pname} _</h3>
                </div>
            </label>
            <div id={ppid} className='pDescription'>
                {pdescription}
                <h4>Techs used:</h4>
                <ul>
                    {techs.map(tech => {
                        return <li key={tech}>{tech}</li>
                    })}
                </ul>
                <h4>Status: <span style={statusColor}>{status.status}</span></h4>
                <a href={link} target='_blank' rel="noreferrer">
                    <img className='projectImage' src={img} alt={pname} title='Click me :)' />
                </a>
            </div>
        </div>
    )
}

export default Project