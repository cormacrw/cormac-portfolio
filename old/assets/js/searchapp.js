const addNodeBtn = document.getElementById('add_node')
const addArrowBtn = document.getElementById('add_arrow')
const findPathBtn = document.getElementById('find_path')
const setTargetBtn = document.getElementById('set_target')
const clearBtn = document.getElementById('clear')
const defaultBtn = document.getElementById('create_default')


const playground = document.getElementById('playground')

let nodeId = 0
let draggables = {}
let connections = {}
let firstNode
let secondNode
let targetNode = null
let addingArrow = false
let pickingFirst = true
let settingTarget = false

const setupPage = () => {
  addNodeBtn.addEventListener('click', addNode)
  addArrowBtn.addEventListener('click', addArrow)
  findPathBtn.addEventListener('click', findPath)
  setTargetBtn.addEventListener('click', setTargetNode)
  playground.addEventListener('click', nodeClick)
  clearBtn.addEventListener('click', clearNodes)
  defaultBtn.addEventListener('click', populateDefaultNodes)

  if(window.innerWidth > 800) {
    populateDefaultNodes()

  }
}

const removeNodes = () => {
  const nodes = document.getElementsByClassName('node')
  Array.from(nodes).forEach(node => {
    node.remove()
  })
  Object.values(draggables).forEach(d => d.remove())
  draggables = {}
  Object.values(connections).forEach(c => c.remove())
  connections = {}
}

const clearNodes = () => {
  removeNodes()
  nodeId = 0
  addNode('start')
}

const populateDefaultNodes = () => {
  nodeId = 0
  removeNodes()
  const n = []
  n.push(addNode('start'))
  n.push(addNode('', 200, 450))
  n.push(addNode('', 150, 700))
  n.push(addNode('', 300, 600))
  n.push(addNode('', 400, 420))
  n.push(addNode('', 450, 680))
  n.push(addNode('', 500, 520))
  n.push(addNode('', 650, 480))
  n.push(addNode('', 700, 680))

  addConnection(n[0], n[1])
  addConnection(n[0], n[2])
  addConnection(n[1], n[2])
  addConnection(n[1], n[4])
  addConnection(n[1], n[3])
  addConnection(n[2], n[3])
  addConnection(n[3], n[4])
  addConnection(n[3], n[5])
  addConnection(n[3], n[6])
  addConnection(n[4], n[6])
  addConnection(n[6], n[7])
  addConnection(n[5], n[8])
  addConnection(n[6], n[8])
  addConnection(n[7], n[8])
  addConnection(n[4], n[7])
  addConnection(n[2], n[5])

  n[8].classList.add('target')
  targetNode = 'node-9'

}

const addNode = (type, left = 30, top = 420) => {
  nodeId++
  const newNode = document.createElement('div')
  newNode.append(nodeId)
  newNode.classList.add('node')

  if(type === 'start') {
    newNode.classList.add('start')
  }

  newNode.id = `node-${nodeId}`
  playground.append(newNode)
  draggables[newNode.id] = new PlainDraggable(document.getElementById(newNode.id), {left})
  draggables[newNode.id].setOptions({top})
  draggables[newNode.id].onDrag = redrawConnections

  return document.getElementById(newNode.id)
}

const addArrow = () => {
  document.getElementById('info').innerHTML = 'Click two nodes to connect them'
  addingArrow = true
  pickingFirst = true
  settingTarget = false
}

const setTargetNode = () => {
  document.getElementById('info').innerHTML = 'Click a node to set it as the target'
  addingArrow = false
  pickingFirst = false
  settingTarget = true  
}

const nodeClick = (ev) => {
  if(!ev.target.classList.contains('node')) {
    return
  }

  if(addingArrow && pickingFirst) {
    firstNode = ev.target
    pickingFirst = false
  } else if(addingArrow && !pickingFirst) {
    secondNode = ev.target

    addConnection(firstNode, secondNode)
    document.getElementById('info').innerHTML = ''

    addingArrow = false
  } else if(settingTarget) {
    const target = document.getElementsByClassName('target')
    if(target.length > 0) {
      target[0].classList.remove('target')
    }
    ev.target.classList.add('target')
    targetNode = target[0].id
    settingTarget = false
    document.getElementById('info').innerHTML = ''
  }
}

const addConnection = (firstNode, secondNode) => {
  connections[`${firstNode.id}//${secondNode.id}`] = new LeaderLine(firstNode, secondNode, {path: 'straight', color: '#bdbdbd'})
}

const redrawConnections = () => {
  Object.values(connections).forEach(c => {
    c.position()
    c.setOptions({color: '#bdbdbd'})
  })
}

const findPath = async () => {
  const nodes = {}
  Object.keys(connections).forEach(k => {
    const [firstNode, secondNode] = k.split('//')
    if(!nodes[firstNode]) {
      nodes[firstNode] = {
        id: Number(firstNode.split('-')[1]),
        connections: [],
        x: draggables[firstNode].left,
        y: draggables[firstNode].top
      }
    }

    if(!nodes[secondNode]) {
      nodes[secondNode] = {
        id: Number(secondNode.split('-')[1]),
        connections: [],
        x: draggables[secondNode].left,
        y: draggables[secondNode].top
      }
    }

    nodes[firstNode].connections.push(Number(secondNode.split('-')[1]))
  })
  
  if(targetNode == null) {
    document.getElementById('error').innerHTML = 'No target node'
    return
  }
  document.getElementById('error').innerHTML = ''
  redrawConnections()

  const data = {
    nodes: Object.values(nodes),
    target: Number(targetNode.split('-')[1])
  }


  const res = await axios.post('https://6zz7ynqprh.execute-api.us-east-1.amazonaws.com/dev/dijkstra/path/', data)

  for(let i = 0; i < res.data.path.length; i++) {
    const node = res.data.path[i]
    const nextNode = res.data.path[i+1]
    if(typeof nextNode === 'undefined') {
      break;
    }
    
    const connection = connections[`node-${node}//node-${nextNode}`]
    connection.setOptions({color: '#ffc406'})
  }
}


setupPage()