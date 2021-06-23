export interface iNode {
        id: string,
        portraitBild: {
            id: string,
            file: {
                url: string,
                fileName: string
            }
        },
        funktion: {
            funktion: string,
            json: {
                nodeType: string,
                data: any,
                content: [
                    {
                        nodeType: string,
                        content: [
                            {
                                nodeType: string,
                                value: string,
                                marks: any,
                                data: any
                            }
                        ],
                        data: any
                    }
                ]
            }
        },
}