// interactive-story-toto.js

class StoryEngine {
    constructor() {
        this.currentNode = null;
    }

    start(storyNode) {
        this.currentNode = storyNode;
        this.showCurrentNode();
    }

    showCurrentNode() {
        console.log(this.currentNode.text);
        this.currentNode.choices.forEach((choice, index) => {
            console.log(`${index + 1}: ${choice.text}`);
        });
    }

    makeChoice(choiceIndex) {
        const choice = this.currentNode.choices[choiceIndex - 1];
        if (choice) {
            this.currentNode = choice.nextNode;
            this.showCurrentNode();
        } else {
            console.log('Invalid choice.');
        }
    }
}

// Example story nodes
const nodeEnd1 = { text: 'Toto finds a hidden garden and lives happily ever after.', choices: [] };
const nodeEnd2 = { text: 'Toto gets lost in the woods but finds his way back.', choices: [] };
const nodePath1 = { 
    text: 'Toto reaches a fork in the road. Does he go left or right?', 
    choices: [
        { text: 'Go left', nextNode: nodeEnd1 },
        { text: 'Go right', nextNode: nodeEnd2 }
    ] 
};

const nodeStart = { 
    text: 'Toto the rabbit is about to embark on an adventure!', 
    choices: [
        { text: 'Continue the adventure', nextNode: nodePath1 },
    ]
};

const storyEngine = new StoryEngine();
storyEngine.start(nodeStart);
