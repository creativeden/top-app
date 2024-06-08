import { Button, Htag, P } from "@/components";

export default function Home() {
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>Primary Button</Button>
            <Button appearance='ghost' arrow='down'>Ghost Button</Button>
            <P size='s'>Some small text</P>
            <P>Some middle text</P>
            <P size='l'>Some large text</P>
        </>
    )
}
