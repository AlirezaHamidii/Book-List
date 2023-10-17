import React from 'react'

export default function Js() {
    const labels = document.querySelectorAll('.form-group label')
    return (
        <div>
            {
                labels.forEach((label) => {
                    label.innerHTML = label.innerText
                        .splite("")
                        .map(
                            (letter, idx) =>
                                `<span style="transition-dalay:${idx*50}ms">${letter}</span>`
                        )
                        .join("")
                })}
        </div>
    )
}
