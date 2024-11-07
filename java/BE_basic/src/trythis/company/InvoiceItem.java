package trythis.company;

public class InvoiceItem {
	private final String id;
	private final String desc;
	private int qty;
	private double unitPrice;

	public InvoiceItem(String id, String desc, int qty, double unitPrice) {
		this.id = id;
		this.desc = desc;
		this.qty = qty;
		this.unitPrice = unitPrice;
	}

	public String getId() {
		return this.id;
	}

	public String getDesc() {
		return this.desc;

	}

	public int getQty() {
		return this.qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public double getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public double getTotal() {
		return this.qty * this.unitPrice;
	}

	@Override
	public String toString() {
		return "InvoiceItem[id='%s', desc='%s', qty=%d, unitPrice=%s]의 구매 총액은 '%.1f".formatted(id, desc, qty, unitPrice,
			getTotal());
	}
}
