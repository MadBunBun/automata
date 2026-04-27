
import { useState, useMemo } from 'react'
import './App.css'
import type { SequenceType } from './types'
import { SEQUENCES } from './constants/sequences'
import { generateSequence } from './utils/math'
import type { SequenceResult } from './utils/math'

function App() {
  const [view, setView] = useState<'menu' | 'sequence'>('menu')
  const [selectedType, setSelectedType] = useState<SequenceType | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  
  const config = selectedType ? SEQUENCES[selectedType] : null
  
  const result: SequenceResult = useMemo(() => {
    if (!config) return { terms: [], status: 'Valid', message: '' }
    return generateSequence(config, inputValue)
  }, [config, inputValue])

  const handleSelect = (type: SequenceType) => {
    setSelectedType(type)
    setInputValue('')
    setView('sequence')
  }

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Recursion Analyzer</h1>
      </header>

      {view === 'menu' ? (
        <div className="menu-container">
          <h2>Menu</h2>
          <nav className="menu-list">
            <button onClick={() => handleSelect('fibonacci')}>1) Fibonacci numbers</button>
            <button onClick={() => handleSelect('lucas')}>2) Lucas numbers</button>
            <button onClick={() => handleSelect('tribonacci')}>3) Tribonacci numbers</button>
            <button className="exit-btn" onClick={() => alert('Closing application...')}>4) Exit</button>
          </nav>
        </div>
      ) : config ? (
        <div className="sequence-container">
          <button className="back-btn" onClick={() => setView('menu')}>← Back to Menu</button>
          <h2>{config.name}</h2>
          <div className="discussion">
            <div className="image-placeholder">
              <img 
                src={`/${config.id}-discussion.png`} 
                alt={`${config.name} Discussion`} 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <p><strong>Formula:</strong> {config.formula}</p>
          </div>
          
          <div className="input-section">
            <label>Input the number of terms: </label>
            <input 
              type="number" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g. 5"
            />
          </div>

          <div className="results-area">
            {result.status === 'Valid' && result.terms.length > 0 ? (
              <div className="results-list">
                <p>The {config.name} are: </p>
                <div className="scrollable-results">
                  {result.terms.join(', ')}
                </div>
              </div>
            ) : inputValue ? (
              <p className="error-message">{result.message}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      <footer className="footer">
        <p>Arcilla,Calica,Camacho,Carullo,Santos,Tucker III-CCASD | Automata Lab Exercise #4</p>
      </footer>
    </div>
  )
}

export default App
