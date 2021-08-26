class Editor {
    constructor(text = ''){
        this.text = text;
        this.copied = '';
        this.previous= [];
    }

    insert = (newText) => {
        if (newText.length < 20) {
            this.text+=newText
            this.previous.push(this.text)
        }
        return this.text
    }

    delete = () => {
        if( this.text !== '') {
            this.text=this.text.substring(0,this.text.length-1)
            this.previous.push(this.text)

        }
        return this.text
    }

    copy = (idx) => {
        this.copied = ''
        if (idx >= this.text.length) {this.copied = ''}
        else if ( 
            idx === 0 ){ this.copied = this.text
        }
        // unsure if I read the instructions correctly, 'starting from <index> and spanning until the end'
        else {
            this.copied = this.text.substring(idx,this.text.length)
        }   
    }

    paste = () => {
        if (this.copied !== '') {
            this.text+=this.copied
            this.previous.push(this.text)
        }
    }

    undo = () => {
        if(this.previous.length > 0) {
            // in case we want to return temp to the console
            let temp = this.previous.pop()
            this.previous.length ? this.previous[this.previous.length-1] : this.text = ''
            return this.text
        } else { 
            return this.text }

    }


}


const ops = ["INSERT Code", "INSERT Signal", "DELETE", "UNDO"]
const ops2 = ["INSERT Da", "COPY 0", "UNDO", "PASTE", "PASTE", "COPY 2", "PASTE", "PASTE", "DELETE", "INSERT aaam"]


const runOperations = (list) => {
    let editor = new Editor();

    for( let i = 0; i < list.length; i ++){
        // console.log(editor.text, editor.copied)

        let operation = list[i].split(' ')
        let action, value

        if (operation.length === 2) {

            action = operation[0]
            value = operation[1]

            if (action === 'INSERT') editor.insert(value)
            if (action === 'COPY') editor.copy(parseInt(value))
        } else {

            action = operation[0]
            if(action === 'PASTE') editor.paste()
            if( action === 'DELETE') editor.delete()
            if( action === 'UNDO') editor.undo()
        }
    }

    return editor.text
}

console.log(runOperations(ops))
console.log(runOperations(ops2))


