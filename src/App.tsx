import { useEffect, useState } from 'react'
import './styles/nav.css'
import './styles/section.css'
function App() {

  const [isLightTheme, setLightTheme] = useState(false)

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light')
    }
    else {
      document.body.classList.remove('light')
    }
    console.log(document.body.classList)
  }, [isLightTheme])
  const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Authentication</a>
          </li>
          <li>
            <a href="#">Endpoints</a>
          </li>
          <li>
            <a href="#">Tutorial</a>
          </li>
          <li>
            <a href="#">Code Examples</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <svg onClick={() => setLightTheme(!isLightTheme)} className={`${isLightTheme && 'light'}`} width="50" height="50" viewBox="0 0 50 50" fill="none">
                <g id="moon">
                    <path id="moon_2" d="M24.3215 44C29.5406 44 34.5459 41.9267 38.2363 38.2363C41.9267 34.5459 44 29.5406 44 24.3215C44 16.3484 39.4197 9.19966 32.3278 6.11302C32.0778 6.00409 31.8009 5.97297 31.533 6.02371C31.2651 6.07445 31.0187 6.2047 30.8259 6.3975C30.6331 6.59029 30.5029 6.83668 30.4521 7.10457C30.4014 7.37245 30.4325 7.64941 30.5415 7.89935C31.3557 9.76881 31.7858 12.1633 31.7858 14.8216C31.7858 24.1756 24.1756 31.7858 14.8216 31.7858C12.1633 31.7858 9.76881 31.3557 7.89935 30.5415C7.64941 30.4325 7.37245 30.4014 7.10457 30.4521C6.83668 30.5029 6.59029 30.6331 6.3975 30.8259C6.2047 31.0187 6.07445 31.2651 6.02371 31.533C5.97297 31.8009 6.00409 32.0778 6.11302 32.3278C9.19966 39.4197 16.3484 44 24.3215 44Z" fill="#FBFBFB" />
                </g>    
                 <g id="sun-rays">
                        <circle id="sun-ball" cx="24.5" cy="24.5" r="15.5" fill="#1e293b" />            
                        <circle id="Ellipse" cx="24.5" cy="3.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_2" cx="39.5" cy="9.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_3" cx="46.5" cy="24.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_4" cx="40.5" cy="39.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_5" cx="24.5" cy="46.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_6" cx="9.5" cy="39.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_7" cx="3.5" cy="24.5" r="2.5" fill="#1e293b" />
                        <circle id="Ellipse_8" cx="10.5" cy="9.5" r="2.5" fill="#1e293b" />
                </g>         
            </svg>
          </li>
        </ul>
      </nav>
    )
  }

  const PricingSection = () => {
    return (
      <section>
        <h1>API Pricing</h1>
        <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <table>
                <thead>
                    <tr>
                        <th>API</th>
                        <th>Model</th>
                        <th>Price per 1K tokens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>OpenAI</td>
                        <td>GPT-3.5</td>
                        <td>$0.002</td>
                    </tr>
                    <tr>
                        <td>OpenAI</td>
                        <td>GPT-4</td>
                        <td>$0.03</td>
                    </tr>
                    <tr>
                        <td>Together AI</td>
                        <td>Llama-2-70b</td>
                        <td>$0.0008</td>
                    </tr>
                    <tr>
                        <td>Together AI</td>
                        <td>Llama-2-13b</td>
                        <td>$0.0006</td>
                    </tr>
                </tbody>
            </table>
            <h2>Token Estimation</h2>
            <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
            <h2>Billing</h2>
            <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>

      </section>
    )
  }

  return (
    <>
      <NavBar />
      <main>
      <PricingSection />
      </main>
    </>
  )
}

export default App
