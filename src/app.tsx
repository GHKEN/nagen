import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {GeneratorOptions, Generator} from './generator'; 

interface State
{
    words: string[];
    newWord: string;
    results: string[];
}

class App extends React.Component<{}, State>
{
    state: State = {
        words: [],
        newWord: '',
        results: [],
    }
    private removeWord(key: number)
    {
        const newWords = this.state.words.filter((v, k) => key != k);
        this.setState({words: newWords});
    }
    private changeWord(key: number, word: string)
    {
        const newWords = this.state.words.map((v, k) => k == key ? word : v);
        this.setState({words: newWords});
    }
    private addWord(word: string)
    {
        const newWords = this.state.words.concat(word);
        this.setState({newWord: '', words: newWords});
    }
    private generate()
    {
        const options = new GeneratorOptions();
        const results = Generator.generate(this.state.words, options);
        this.setState({results: results});
    }
    render()
    {
        const words = this.state.words.map((word, key) => (
            <li key={key}>
                <input type='text' value={word} onChange={e => this.changeWord(key, e.target.value)}/>
                <button onClick={e => this.removeWord(key)}>delete</button>
            </li>
        ));
        const results = this.state.results.map((v, k) => (
            <li key={k}>{v}</li>
        ));
        return (
            <div>
                <h1>NAGEN</h1>
                <div className='content'>
                    <ul className='wordlist'>
                        {words}
                        <li>
                            <input type='text' value={this.state.newWord} onChange={e => this.setState({newWord: e.target.value})}/>
                            <button onClick={e => this.addWord(this.state.newWord)}>add</button>
                        </li>
                    </ul>
                    <div className='generate-button'>
                        <button onClick={e => this.generate()}>generate</button>
                    </div>
                    <ul className='result'>
                        {results}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));