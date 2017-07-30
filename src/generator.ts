import * as _ from 'lodash';

export class GeneratorOptions
{

}

export class Generator
{
    public static generate(words: string[], options: GeneratorOptions)
    {
        var results = _.range(10).map(v => {
            return _.shuffle(words.map(w => {
                const start = _.sample(_.range(0, w.length - 1)) as number;
                const end = _.sample(_.range(start + 2, w.length + 1)) as number;
                return w.slice(start, end);
            })).join('');
        });
        return results;
    }
}