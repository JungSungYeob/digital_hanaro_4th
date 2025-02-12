package trythis.bookstore;

public class Customer {
	private String name;
	private boolean member = false;
	private String memberType;

	public Customer(String name, boolean member) {
		this.name = name;
		this.member = member;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isMember() {
		return member;
	}

	public void setMember(boolean member) {
		this.member = member;
	}

	public String getMemberType() {
		return memberType;
	}

	public void setMemberType(String memberType) {
		this.memberType = memberType;
	}

	@Override
	public String toString() {
		return "Customer{name='%s', member=%s, memberType='%s'}".formatted(this.name, this.member, this.memberType);
	}
}
