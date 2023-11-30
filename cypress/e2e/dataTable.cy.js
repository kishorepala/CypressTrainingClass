let url

describe("Table traverse test case", ()=>{

    //const url = "https://codenboxautomationlab.com/practice/";
    beforeEach(() => {
        url = "https://codenboxautomationlab.com/practice/"
       })
   
    it("TC1:  Verify table headers", ()=>{
        //cy.visit("https://codenboxautomationlab.com/practice/");
        
        // //const url = "https://codenboxautomationlab.com/practice/";
        cy.visit(url);
        cy.get("#product th").should("have.length",3);
        cy.get("#product th").eq(0).should("contain","Instructor");
        cy.get("#product th").eq(1).should("contain","Course");
        cy.get("#product th").eq(2).should("contain","Price");

    })

    it("TC2: Verifying table data",()=>{
        //cy.visit("https://codenboxautomationlab.com/practice/");
        // //const url = "https://codenboxautomationlab.com/practice/";
        cy.visit(url);
        cy.get("#product tr").eq(6).find("td").eq(0).should("contain","Sariful Islam")
    })

    it("TC3: Validating 7th row in a table",()=>{

        cy.visit(url);
        cy.get("#product tr").eq(7).find("td").eq(2).should("contain","40")
    })

    it("TC4: Validating second last row",()=>{

        cy.visit(url);
        cy.get("#product tr").eq(-2).find("td").eq(2).should("contain","50")

    })

    it("TC5:  Validating last row",()=>{
        cy.visit(url);
        cy.get("#product tr").eq(-1).find("td").eq(0).should("contain","Total");
        cy.get("#product tr").eq(-1).find("td").eq(1).should("contain","");
        cy.get("#product tr").eq(-1).find("td").eq(2).should("contain","297");
    })

    it("TC6:  Validating Total",()=>{
        cy.visit(url);
        const total1 = cy.get("#product tr").eq(1).find("td").eq(2);
        const total2 = cy.get("#product tr").eq(2).find("td").eq(2);
        const total3 = cy.get("#product tr").eq(3).find("td").eq(2);
        const total4 = cy.get("#product tr").eq(4).find("td").eq(2);
        const total5 = cy.get("#product tr").eq(5).find("td").eq(2);
        const total6 = cy.get("#product tr").eq(6).find("td").eq(2);
        const total7 = cy.get("#product tr").eq(7).find("td").eq(2);
        const total8 = cy.get("#product tr").eq(8).find("td").eq(2);
        const total9 = cy.get("#product tr").eq(9).find("td").eq(2);
        const total10 = cy.get("#product tr").eq(10).find("td").eq(2);
        const finalTotal = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
        cy.log(finalTotal);

        //cy.get("#product tr").eq(-1).find("td").eq(2).should("contain",finalTotal);
    }

    )
    


})