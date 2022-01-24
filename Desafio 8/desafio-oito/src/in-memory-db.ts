/*import { Category } from './app/pages/categories/shared/category.model';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Entry } from './app/pages/entries/shared/entry.model';


export class InMemoryDb implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: "Moradia", description: "Pagamentos de contas da casa" },
      { id: 2, name: "Saúde", description: "Plano de saúde e remédios" },
      { id: 3, name: "Lazer", description: "Cinema, parque, praia, etc" },
      { id: 4, name: "Salário", description: "Recebimento de salário" },
      { id: 5, name: "Freelas", description: "Trabalhos como freelancer" }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gas de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Compra de gas de cozinha" } as unknown as Entry,
      { id: 2, name: 'Academia', categoryId: categories[1].id, category: categories[1], paid: false, date: "14/10/2018", amount: "90,00", type: "expense", description: "Mensalidade da academia" } as unknown as Entry,
      { id: 3, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "15/10/2018", amount: "4405,15", type: "revenue", description: "Recebimento de salário" } as unknown as Entry,
      { id: 4, name: 'Pagamento', categoryId: categories[4].id, category: categories[4], paid: false, date: "18/10/2018", amount: "5503,90", type: "revenue", description: "Recebimento Feelance" } as unknown as Entry,
      { id: 5, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "20/10/2018", amount: "65,00", type: "expense", description: "Cinema + pipoca" } as unknown as Entry,

    ]
    return {categories, entries}
  }
}*/
