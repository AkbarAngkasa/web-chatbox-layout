
const [jargon, setJargon] = useState('');
useEffect(() => {
    const jargons = ['Woo pretty excited!', 'Hello, Welcome back!']
    setJargon(jargons[Math.floor(Math.random() * jargons.length)]);
}, [])
