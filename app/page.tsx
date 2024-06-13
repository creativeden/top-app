import { Button, Htag, P, Rating, Tag } from "@/components"
import { withLayout } from "@/layout/Layout"
import { useState } from "react"
import { Menu } from "./components/menu"

export async function Home() {
    // const [rating, setRating] = useState<number>(4)
    return (
        <>
            <Htag tag='h1'>Text title</Htag>
            <Button appearance='primary' arrow='right'>Primary Button</Button>
            <Button appearance='ghost' arrow='down'>Ghost Button</Button>
            <P size='s'>Some small text</P>
            <P>Some middle text</P>
            <P size='l'>Some large text</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Green</Tag>
            <Tag color='primary'>Primary</Tag>
            {/* <Rating rating={rating} isEditable setRating={setRating} /> */}

            <Menu />
        </>
    )
}

export default withLayout(Home)
