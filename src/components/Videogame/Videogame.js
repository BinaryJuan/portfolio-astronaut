import './Videogame.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Videogame = () => {
    const [playerTurn, setPlayerTurn] = useState(true)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    let gameover = false
    let allPosFilled = false
    let userWinner = 'tied'
    let table = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    const winningLines = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]

    const winner = (player) => {
        if (userWinner === 'tied') {
            if (!allPosFilled) {
                winningLines.forEach(combination => {
                    const [a, b, c] = combination
                    if (table[a] === player && table[b] === player && table[c] === player) {
                        userWinner = player
                        updateScore(player)
                        gameover = true
                        setPlayerTurn(false)
                        winnerNotification(player)
                        return (player)
                    }
                })
            }
        }
    }

    const reset = () => {
        table = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
        setPlayerTurn(true)
        allPosFilled = false
        userWinner = 'tied'
        resetBoardPositions()
    }

    const resetBoardPositions = () => {
        const boardElements = document.querySelectorAll(".boardPosition")
        boardElements.forEach(element => {
            element.innerHTML = ''
        })
    }

    const updateScore = (player) => {
        if (player === 'X') {
            setPlayerScore(playerScore + 1)
        } else {
            setComputerScore(computerScore + 1)
        }
    }

    const winnerNotification = (player) => {
        toast.success(`"${player}" won!`, {
            position: toast.POSITION.TOP_RIGHT,
            closeOnClick: true,
            closeButton: false,
            hideProgressBar: false,
            icon: '🏆'
        })
    }

    const playerWrite = (pos) => {
        if (userWinner === 'tied') {
            if (playerTurn) {
                const square = document.getElementById(pos)
                if (square.innerHTML.trim() === "") {
                    square.innerHTML ='X'
                    table[pos] = 'X'
                    winner('X')
                    setPlayerTurn(false)
                    posFilled()
                    if (userWinner === 'tied') {
                        computerWrite()
                    }
                }
            }
        }
    }

    const computerWrite = () => {
        if (userWinner === 'tied') {
            let pos = randomIntFromInterval(0, 8)
            let written = false
            let option
            if (!allPosFilled) {
                while (!written) {
                    let square = document.getElementById(pos)
                    if (square.innerHTML.trim() === "") {
                        square.innerHTML ='O'
                        table[pos] = 'O'
                        winner('O')
                        written = true
                        setPlayerTurn(false)
                        posFilled()
                    }
                    else {
                        option = randomIntFromInterval(1, 2)
                        if (option === 1) {
                            pos = randomIntFromInterval(0, 8)
                        }
                        else {
                            pos = randomIntFromInterval(0, 8)
                        }
                    }
                }
                setPlayerTurn(true)
            }
            
            if (gameover) {
                setPlayerTurn(false)
            }
        }
    }

    const posFilled = () => {
        const max = 9
        let count = 0
        table.forEach(pos => {
            if (pos === 'X' || pos === 'O') {
                count ++
            }
        })
        if (count === max) {
            allPosFilled = true
        }
        return count
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className='videogame'>
            <h2>Tic tac toe</h2>
            <div className='boardTable'>
                <div className='boardPosition' id='0' onClick={() => {playerWrite('0')}}></div>
                <div className='boardPosition' id='1' onClick={() => {playerWrite('1')}}></div>
                <div className='boardPosition' id='2' onClick={() => {playerWrite('2')}}></div>
                <div className='boardPosition' id='3' onClick={() => {playerWrite('3')}}></div>
                <div className='boardPosition' id='4' onClick={() => {playerWrite('4')}}></div>
                <div className='boardPosition' id='5' onClick={() => {playerWrite('5')}}></div>
                <div className='boardPosition' id='6' onClick={() => {playerWrite('6')}}></div>
                <div className='boardPosition' id='7' onClick={() => {playerWrite('7')}}></div>
                <div className='boardPosition' id='8' onClick={() => {playerWrite('8')}}></div>
            </div>
            <div className='scoreFlex'>
                <div className='scoreElement'>Player score: <span className='scorePlayer'>{playerScore}</span></div>
                <div className='scoreElement'>Computer score: <span className='scoreComputer'>{computerScore}</span></div>
            </div>
            <button className='buttonReset' onClick={reset}>Reset</button>
            <Link className='goHome easterGoHome' to='/'>
                <h3>Go <span className='spanPurple'> home</span></h3>
            </Link>
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Videogame