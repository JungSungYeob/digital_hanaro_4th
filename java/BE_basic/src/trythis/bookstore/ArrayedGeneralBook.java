package trythis.bookstore;

public class ArrayedGeneralBook implements GeneralBook {
	private String[] names;
	private String[] records;

	public ArrayedGeneralBook(String[] names, String records[]) {
		this.names = names;
		this.records = records;
	}

	@Override
	public int size() {
		return this.names.length;
	}

	@Override
	public String names() {
		StringBuilder sb = new StringBuilder();
		for (String nm : this.names) {
			sb.append(nm);
		}
		return sb.toString();
	}

	@Override
	public String records() {
		return "";
	}

	@Override
	public boolean nameExist(String name) {
		return false;
	}

	@Override
	public void add(String name, String record) {

	}

	@Override
	public void remove(String name, String record) {

	}

	@Override
	public String get(String name) {
		return "";
	}

	@Override
	public void sort() {

	}

	@Override
	public void print() {

	}

	// public static void main(String[] args) {
	// 	String[] names = {"Sam", "Rhee", "Kim"};
	// 	String[] records = {"1111", "2222", "3333"};
	// 	ArrayedGeneralBook gb = new ArrayedGeneralBook(names, records);
	// 	System.out.println(gb.names()); //Sam Rhee Kim
	// 	gb.add("Allan", "4444");
	// 	gb.print();
	// 	//Allan4444\nKim3333\nRhee2222\nSam1111
	// 	System.out.println("현재 저장된 데이터의 크기 : " + gb.size(names)); //4
	// 	gb.add("Alex", "5555");
	// 	System.out.println("현재 저장된 데이터의 크기 : " + gb.size(names)); //5
	// 	gb.print(); //Alex5555\nAllan4444\nKim3333\nRhee2222\nSam1111\n
	// 	System.out.println(gb.nameExist("Alex")); //true
	// 	gb.remove("Alex", "5555");
	// 	gb.remove("Sam", "1111");
	// 	gb.print(); //Allan4444\nKim3333\nRhee2222
	// 	String foundRecord = gb.get("Allan");
	// 	System.out.println(foundRecord); //4444
	// }
}
