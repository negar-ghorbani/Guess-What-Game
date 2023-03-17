import React, { SyntheticEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { ImagePixelated, ElementPixelated } from "react-pixelate"
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { ConfigProvider, Radio, message, Alert } from 'antd';


export default function Game() {
    const levels = {
        normal: 0,
        easy: 5,
        medium: 10,
        hard: 15,
    }

    const [images, setImages] = useState('');
    const [randVal, setRandVal] = useState('');
    const [score, setScore] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [pixelSize, setPixelSize] = useState(levels.medium);
    const [isWrong, setIsWrong] = useState(false);

    const inputRef = useRef(null);


    const location = useLocation()
    const fetchImage = async (query: string) => {
        await axios.get(`https://api.unsplash.com/search/photos/?client_id=50I22YfnArt6UVhdHSeRCWNBLWEO66IXOPoVpgPMtGA&query=${query}&fit=crop&h=50px&w=100px&per_page=1`)
            .then((data: any) => data.data.results[0].urls.small_s3)
            .then((data: any) => setImages(data))
    };
    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:3000/categories/${location.state}`)
                .then((data: any) => (data.data.value))
                .then((data: any) => data[Math.floor(Math.random() * data.length)])
                .then((data) => {
                    fetchImage(data);
                    setRandVal(data);
                })
        })();
    }, [refresh])



    const handleClick = () => {
        setIsWrong(false);
        if ((inputRef.current as unknown as HTMLInputElement).value.toLowerCase() === randVal.toLowerCase()) {
            if (pixelSize !== 0) {
                setScore(score + 1);
            }
            setRefresh(!refresh);
            (inputRef.current as unknown as HTMLInputElement).value = '';
        }
        else {
            setIsWrong(true);
        }
    };
    const onChange = (e) => {
        setPixelSize(levels[e.target.value]);
    }
    return (
        <>
            <div className="game" >
                <div className='scorediv'>
                    <div className='score'>
                        Score: {score}
                    </div>
                    <div className='levels'>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#625f5a',
                                },
                            }}>
                            <Radio.Group onChange={onChange} defaultValue='medium' buttonStyle="solid">
                                <Radio.Button value="normal">Normal</Radio.Button>
                                <Radio.Button value="easy">Easy</Radio.Button>
                                <Radio.Button value="medium">Medium</Radio.Button>
                                <Radio.Button value="hard">Hard</Radio.Button>
                            </Radio.Group>
                        </ConfigProvider>

                    </div>
                </div>

                <div className='picture'>
                    {/* <img src={images} style={{ width: '300px', height: '300px' }} />s */}

                    <ImagePixelated src={images} width={400} height={250} pixelSize={pixelSize} fillTransparencyColor={'rgb(229,227,215)'} />
                </div>
                <div className='answer'>
                    <input type="input" className="form__field" placeholder="Write your answer here." id="answer"
                        name="answer" ref={inputRef} autoComplete='off'
                    />
                    <button onClick={handleClick} className='checkbutton'>Check</button>

                </div>
                <div className='error'>
                    {
                        isWrong ? <Alert message="Wrong, try again" type="error" showIcon /> : null
                    }
                </div>
            </div>
        </>
    )
}