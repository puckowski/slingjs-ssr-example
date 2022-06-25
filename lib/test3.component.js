import { textNode, markup } from 'slingjs/sling.min.es5';
import Test2Component from './test2.component';

class Test3Component {
    view() {
        return markup('div', {
            attrs: {
                id: 'divroot',
                slssrclass: 'Test3Component'
            },
            children: [
                markup('span', {
                    children: [
                        textNode('Root text')
                    ]
                }),
                new Test2Component(),
                textNode('Text node')
            ]
        })
    }
}

export default Test3Component;
