import {fruits} from './common';

export class Tree {
  constructor({rootNodes, randChildren, maximumNesting}) {
    this.rootNodes = rootNodes;
    this.randChildren = randChildren;
    this.maximumNesting = maximumNesting;

    this._prototipeTree = [];
    this._counter = 1;
  }

  _rand(randArr = this.randChildren) {
    const [min, max] = randArr;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _generateRoots() {
    for (let i = 0; i < this.rootNodes; i++) {
      this._prototipeTree.push({
        id: this._counter, 
        name: fruits[this._rand([0, fruits.length - 1])], 
        parent: null
      });
      this._counter++;
    }
  }

  _addNodesToPrototipeTree(parents) {
    if (this.maximumNesting == 0) return;

    let children = [];

    parents.forEach((child) => {
      const childrenCount = this._rand();
      for (let i = 0; i < childrenCount; i++) {
        children.push({
          id: this._counter, 
          name: fruits[this._rand([0, fruits.length - 1])], 
          parent: child.id
        });
        this._counter++;
      }
    });

    this._prototipeTree = [...this._prototipeTree, ...children];
    this.maximumNesting--;
    this._addNodesToPrototipeTree(children);
  }

  _generateTree () {
    // Складываем все элементы будущего дерева в мап под id-ключами
    const map = new Map(this._prototipeTree.map(item => [item.id, item]));
    
    // Обход в цикле по значениям, хранящимся в мапе
    for (let item of map.values()) {
      
      // Проверка, является ли нода дочерней (при parent === null вернет undefined)
      if (!map.has(item.parent)) {
        continue;
      }
      
      // Сохраняем прямую ссылку на родительскую ноду, чтобы дважды не доставать из мапа
      const parent = map.get(item.parent);
  
      // Добавляем поточную ноду в список дочерних нод родительчкого узла.
      // Здесь сокращено записана проверка на то, есть ли у ноды свойство children.
      parent.children = [...parent.children || [], item];
    }
  
    // Возвращаем верхний уровень дерева. Все дочерние узлы уже есть в нужных родительских нодах
    return [...map.values()].filter(item => !item.parent);
  }


  //----------------------------------------------------------------------
  generate() {
    this._generateRoots();
    this._addNodesToPrototipeTree(this._prototipeTree);
    return this._generateTree(this._prototipeTree);
  }
}

