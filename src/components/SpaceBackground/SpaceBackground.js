import Particles from 'react-tsparticles'
import ParticlesConfig from '../ParticlesConfig/ParticlesConfig'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

const SpaceBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <div>
            <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} params={ParticlesConfig} />
        </div>
    )
}

export default SpaceBackground