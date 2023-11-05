describe('Giải phương trình bậc 2', () => {
  beforeEach(() => {
    // Thay thế bằng URL thực tế của trang web của bạn
    cy.visit('http://127.0.0.1:5500/index.html');
  });
  //Test case 1
  it('Kiểm tra giải phương trình vô số nghiệm', () => {

    cy.get('#a').type('0');
    cy.get('#b').type('0');
    cy.get('#c').type('0');

    cy.get('button').click();

    cy.get('#result').should('have.text', 'Phương trình có vô số nghiệm');
  });
  //Test case 2
  it("Kiểm tra giải phương trình bậc 1 có một nghiệm duy nhất", () => {
    cy.get("#a").type("0");
    cy.get("#b").type("3");
    cy.get("#c").type("6");

    cy.get("button").click();

    cy.get("#result").should("have.text", "Phương trình có nghiệm : x = -2");
  });
  //Test case 3
  it('Kiểm tra giải phương trình vô nghiệm', () => {
    cy.get('#a').type('0');
    cy.get('#b').type('0');
    cy.get('#c').type('4');

    cy.get('button').click();

    cy.get('#result').should('have.text', 'Phương trình vô nghiệm');
  });
  //Test case 4
  it('Kiểm tra giải phương trình có 2 nghiệm', () => {
    cy.get('#a').type('1');
    cy.get('#b').type('-3');
    cy.get('#c').type('2');

    cy.get('button').click();

    cy.get('#result').should('have.text', 'Phương trình có 2 nghiệm: x1 = 2 và x2 = 1');
  });
  //Test case 5
  it('Kiểm tra giải phương trình có nghiệm kép', () => {
    cy.get('#a').type('1');
    cy.get('#b').type('4');
    cy.get('#c').type('4');

    cy.get('button').click();

    cy.get('#result').should('have.text', 'Phương trình có nghiệm kép: x = -2');
  });
  //Test case 6
  it('Kiểm tra giải phương trình vô nghiệm', () => {
    cy.get('#a').type('1');
    cy.get('#b').type('2');
    cy.get('#c').type('5');

    cy.get('button').click();

    cy.get('#result').should('have.text', 'Phương trình vô nghiệm');
  });

  //Test case 7
  it("Kiểm tra thông báo lỗi khi nhập a là kí tự", () => {
    // Nhập các kí tự không hợp lệ cho a và nhấp vào nút "Giải"
    cy.get("#a").type("abc");
    cy.get("#b").type('4');
    cy.get("#c").type("5");
    cy.get("button").click();

    cy.get("#result").should("have.text", "Hãy nhập a, b, c là số.");
  });
  //Test case 8
  it("Kiểm tra thông báo lỗi khi nhập b là kí tự", () => {
    // Nhập các kí tự không hợp lệ cho b và nhấp vào nút "Giải"
    cy.get("#a").type("3");
    cy.get("#b").type('xyz');
    cy.get("#c").type("5");
    cy.get("button").click();

    cy.get("#result").should("have.text", "Hãy nhập a, b, c là số.");
  });

  //Test case 9
  it("Kiểm tra thông báo lỗi khi nhập c là kí tự", () => {
    // Nhập các kí tự không hợp lệ cho c và nhấp vào nút "Giải"
    cy.get("#a").type("3");
    cy.get("#b").type('5');
    cy.get("#c").type("g");
    cy.get("button").click();

    cy.get("#result").should("have.text", "Hãy nhập a, b, c là số.");
  });
  //Test case 10
  it("Kiểm tra thông báo lỗi khi để trống a", () => {
    cy.get("#b").type('5');
    cy.get("#c").type("6");
    cy.get("button").click();

    cy.get("#result").should("have.text", "Hãy nhập vào a, b, c.");

  });
  //Test case 11
  it("Kiểm tra thông báo lỗi khi để trống b", () => {
    cy.get("#a").type('3');
    cy.get("#c").type("2");
    cy.get("button").click();

    cy.get("#result").should("have.text", "Hãy nhập vào a, b, c.");

  });
  //Test case 12
  it("Kiểm tra thông báo lỗi khi để trống c", () => {
    cy.get("#a").type('3');
    cy.get("#b").type("2");
    cy.get("button").click();

    cy.get("#result").should("have.text", "Hãy nhập vào a, b, c.");

  });
});
